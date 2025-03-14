# Developer Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS for MERN stack and blockchain developers.

## Features

- 📱 Fully responsive design
- 🌓 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized
- 🚀 Fast performance
- 📊 Skills visualization
- 📁 Filterable projects showcase
- 📝 Work experience timeline

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

- `src/app/layout.tsx` - Update metadata with your name and details
- `src/app/sections/Hero.tsx` - Update name, title, and social links
- `src/app/sections/About.tsx` - Update your bio, education, and personal info
- `src/app/sections/Experience.tsx` - Update your work experience
- `src/app/sections/Projects.tsx` - Update your projects
- `src/app/sections/Contact.tsx` - Update your contact information

### Email Integration

To enable the contact form functionality:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Update the EmailJS configuration in `src/app/sections/Contact.tsx`:

```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current!,
  'YOUR_PUBLIC_KEY'
);
```

### Styling

The website uses Tailwind CSS for styling. You can customize the colors and other design elements in:

- `src/app/globals.css` - Update CSS variables for colors
- `tailwind.config.js` - Update Tailwind configuration

## Deployment

You can deploy this website to various platforms:

### Vercel (Recommended)

#### Prerequisites

- A [GitHub](https://github.com/) account
- A [Vercel](https://vercel.com/) account (you can sign up with your GitHub account)

#### Deployment Steps

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.

3. Click on "Add New..." and select "Project".

4. Import your GitHub repository.

5. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Output Directory: .next

6. Click "Deploy" and wait for the deployment to complete.

7. Once deployed, Vercel will provide you with a URL to access your live website.

#### Environment Variables

If you're using environment variables (like for EmailJS), make sure to add them in the Vercel project settings under "Environment Variables".

#### Custom Domain

To use a custom domain:

1. Go to your project settings in Vercel.
2. Navigate to the "Domains" section.
3. Add your domain and follow the instructions to configure DNS settings.

#### Continuous Deployment

Vercel automatically deploys your site when you push changes to your GitHub repository. No additional configuration is needed.

### Netlify

1. Push your code to a GitHub repository
2. Import your repository on [Netlify](https://netlify.com)
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
