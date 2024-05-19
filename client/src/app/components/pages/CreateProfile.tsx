import React from 'react';

const CreateProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create Profile</h1>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="professional_role" className="block text-sm font-medium text-gray-600">Professional Role</label>
            <input
              type="text"
              id="professional_role"
              name="professional_role"
              placeholder="Enter your professional role"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="github_link" className="block text-sm font-medium text-gray-600">GitHub Link</label>
            <input
              type="url"
              id="github_link"
              name="github_link"
              placeholder="Enter your GitHub link"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="linkedin_link" className="block text-sm font-medium text-gray-600">LinkedIn Link</label>
            <input
              type="url"
              id="linkedin_link"
              name="linkedin_link"
              placeholder="Enter your LinkedIn link"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="tech_stack" className="block text-sm font-medium text-gray-600">Tech Stack</label>
            <input
              type="text"
              id="tech_stack"
              name="tech_stack"
              placeholder="Enter your tech stack"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="user_bio" className="block text-sm font-medium text-gray-600">User Bio</label>
            <textarea
              id="user_bio"
              name="user_bio"
              placeholder="Enter your bio"
              className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
              rows={4}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
