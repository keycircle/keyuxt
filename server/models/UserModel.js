const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * User Model
 * ==========
 */
const User = new keystone.List('User')

User.add(
  {
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true, required: true },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    facebook: { type: String },
    twitter: { type: String },
    google: { type: String },
    github: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    steam: { type: String },
    profile: {
      name: { type: Types.Name, required: true, index: true },
      gender: { type: { type: String } },
      location: { type: String },
      website: { type: String },
      picture: { type: String }
    }
  },
  'Permissions',
  {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
  }
)

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin
})

/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' })

/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin'
User.register()
