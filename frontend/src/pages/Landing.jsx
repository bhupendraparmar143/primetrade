import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

function Landing() {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-slate-100">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-brand-600">Primetrade</span>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn-primary">
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/login" className="btn-secondary">
                    Login
                  </Link>
                  <Link to="/register" className="btn-primary">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Welcome to Primetrade
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            A scalable web application with authentication, dashboard, and task management.
            Built with modern technologies for optimal performance and user experience.
          </p>
          <div className="flex justify-center space-x-4">
            {!isAuthenticated && (
              <>
                <Link to="/register" className="btn-primary text-lg px-8 py-3">
                  Get Started Free
                </Link>
                <Link to="/login" className="btn-secondary text-lg px-8 py-3">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your tasks and stay organized
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="text-brand-600 text-5xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Secure Authentication</h3>
            <p className="text-slate-600">
              JWT-based authentication with bcrypt password hashing ensures your data is protected
              with industry-standard security practices.
            </p>
          </div>
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="text-brand-600 text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Comprehensive Dashboard</h3>
            <p className="text-slate-600">
              Get insights at a glance with a beautiful dashboard showing your profile, task
              statistics, and recent activity.
            </p>
          </div>
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="text-brand-600 text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Fast & Scalable</h3>
            <p className="text-slate-600">
              Built with React, Node.js, and MongoDB using modern architecture patterns designed
              for scalability and performance.
            </p>
          </div>
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="text-brand-600 text-5xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Task Management</h3>
            <p className="text-slate-600">
              Full CRUD operations with search and filter capabilities. Organize your tasks by
              status and find what you need instantly.
            </p>
          </div>
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="text-brand-600 text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Beautiful UI</h3>
            <p className="text-slate-600">
              Modern, responsive design built with Tailwind CSS. Works seamlessly on desktop,
              tablet, and mobile devices.
            </p>
          </div>
          <div className="card p-8 hover:shadow-lg transition-shadow">
            <div className="text-brand-600 text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Protected Routes</h3>
            <p className="text-slate-600">
              Secure your sensitive pages with protected routes. Only authenticated users can
              access dashboard and profile pages.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get started in minutes with our simple process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600 text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Create Account</h3>
              <p className="text-slate-600">
                Sign up with your email and password. We use secure authentication to protect your
                account.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600 text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Explore Dashboard</h3>
              <p className="text-slate-600">
                Access your personalized dashboard with profile information and task statistics at
                a glance.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-600 text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Manage Tasks</h3>
              <p className="text-slate-600">
                Create, update, and organize your tasks. Use search and filters to find exactly
                what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built With Modern Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powered by industry-leading frameworks and tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="card p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">React</div>
              <p className="text-sm text-slate-600">Frontend Framework</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">Node.js</div>
              <p className="text-sm text-slate-600">Backend Runtime</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">MongoDB</div>
              <p className="text-sm text-slate-600">Database</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">Express</div>
              <p className="text-sm text-slate-600">API Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="bg-brand-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              Join thousands of users managing their tasks efficiently
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register" className="bg-white text-brand-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Sign Up Free
              </Link>
              <Link to="/login" className="bg-brand-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-800 transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Primetrade</h3>
              <p className="text-slate-400">
                A scalable web application for task management and productivity.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/tasks" className="hover:text-white transition-colors">
                    Tasks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#docs" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#api" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Primetrade. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
