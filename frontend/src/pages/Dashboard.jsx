import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { userAPI, tasksAPI } from '../services/api';

function Dashboard() {
  const { user, setUser } = useAuthStore();
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [profileRes, tasksRes] = await Promise.all([
        userAPI.getProfile(),
        tasksAPI.getAll(),
      ]);

      setProfile(profileRes.data);
      setUser(profileRes.data);
      setTasks(tasksRes.data);

      const stats = {
        total: tasksRes.data.length,
        pending: tasksRes.data.filter((t) => t.status === 'pending').length,
        inProgress: tasksRes.data.filter((t) => t.status === 'in-progress').length,
        completed: tasksRes.data.filter((t) => t.status === 'completed').length,
      };
      setStats(stats);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome back, {profile?.name || user?.name}!</p>
      </div>

      {/* Profile Card */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Your Profile</h2>
          <Link to="/profile" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
            Edit Profile →
          </Link>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-sm text-slate-600">Name:</span>
            <span className="ml-2 text-slate-900 font-medium">{profile?.name}</span>
          </div>
          <div>
            <span className="text-sm text-slate-600">Email:</span>
            <span className="ml-2 text-slate-900 font-medium">{profile?.email}</span>
          </div>
          <div>
            <span className="text-sm text-slate-600">Member since:</span>
            <span className="ml-2 text-slate-900 font-medium">
              {new Date(profile?.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="text-sm text-slate-600 mb-1">Total Tasks</div>
          <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
        </div>
        <div className="card p-6">
          <div className="text-sm text-slate-600 mb-1">Pending</div>
          <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
        </div>
        <div className="card p-6">
          <div className="text-sm text-slate-600 mb-1">In Progress</div>
          <div className="text-3xl font-bold text-blue-600">{stats.inProgress}</div>
        </div>
        <div className="card p-6">
          <div className="text-sm text-slate-600 mb-1">Completed</div>
          <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Recent Tasks</h2>
          <Link to="/tasks" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
            View All →
          </Link>
        </div>
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-slate-600">
            <p>No tasks yet. Create your first task!</p>
            <Link to="/tasks" className="btn-primary mt-4 inline-block">
              Create Task
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.slice(0, 5).map((task) => (
              <div
                key={task._id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-slate-900">{task.title}</h3>
                  {task.description && (
                    <p className="text-sm text-slate-600 mt-1">{task.description}</p>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : task.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

