const keystone = require('keystone');
const { Types } = keystone.Field;

/**
 * PostCategory Model
 * ==================
 */

const PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

PostCategory.add({
	name: { type: String, required: true },
	description: { type: String },
	image: { type: Types.CloudinaryImage },
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.register();