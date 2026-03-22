---
description: How to deploy the portfolio to Vercel
---
### Prerequisites
- A [Vercel](https://vercel.com/) account.
- Your portfolio code pushed to a [GitHub](https://github.com/) repository.

### Deployment Steps
1. **Login to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.

2. **Import Project**:
   - Click the **"Add New..."** button and select **"Project"**.
   - Find your portfolio repository in the list and click **"Import"**.

3. **Configure Settings**:
   - **Framework Preset**: Vercel should automatically detect **Vite**. If not, select it.
   - **Root Directory**: Ensure it points to the directory containing `package.json` (usually `./`).

4. **Add Environment Variables (Recommended)**:
   - While your `access_key` is currently hardcoded, it's best practice to use environment variables.
   - In the **"Environment Variables"** section, add:
     - **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
     - **Value**: `774c0313-e118-4407-aedc-7cd421a1b9d5`
   - *Note: You'll need to update `Contact.jsx` to use `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` for this to work.*

5. **Deploy**:
   - Click the **"Deploy"** button.
   - Vercel will build your project and provide a production URL (e.g., `your-portfolio.vercel.app`).

### Verifying the Deployment
- Once the build is finished, visit the provided URL.
- Test the **Contact Form** to ensure emails are still being sent correctly.
- Check the **Resume Download** to ensure `public/resume.pdf` is accessible.
