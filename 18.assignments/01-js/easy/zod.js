/*const { z } = require('zod');
// Define a schema
const userSchema = z.object({
    name: z.string(),
    age: z.number().min(18),
    email: z.string().email(),
});
// Validate data
const result = userSchema.safeParse({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
});
if (result.success) {
    console.log("Validation passed:", result.data);
} else {
    console.log("Validation failed:", result.error.errors);
}*/
const { z } = require('zod');
// Schema for User model
const userSchema = z.object({
    id: z.string().optional(), // Optional because it is generated automatically
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6), // Ensure a minimum length for passwords
    posts: z.array(z.string()).optional(), // Array of post IDs (could be used to validate related posts)
});
// Schema for Post model
const postSchema = z.object({
    id: z.string().optional(), // Optional because it is generated automatically
    slug: z.string().min(1),   // Slug should be a non-empty string
    title: z.string().min(1),  // Title should be a non-empty string
    body: z.string().min(1),   // Body should be a non-empty string
    authorId: z.string(),      // AuthorId must be a string (ObjectId format)
});
module.exports = { userSchema, postSchema };

