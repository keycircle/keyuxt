exports.create = {
  User: [
    {
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@keystone.com',
      password: process.env.ADMIN_PASSWORD || 'password',
      isAdmin: true,
    }
  ]
}
