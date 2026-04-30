# Certificates Folder

Add your certificate images here (JPG, PNG, or WebP format).

## How to Add Your Certificates

1. **Add your certificate images** to this folder
   - Recommended format: JPG or PNG
   - Recommended size: 1200x900px or similar aspect ratio (4:3)
   - Name them descriptively (e.g., `aws-certification.jpg`, `react-certificate.png`)

2. **Update the certificate data** in `src/components/sections/certificates.tsx`
   
   Replace the placeholder data with your actual certificates:
   
   ```typescript
   const certificates = [
     {
       title: "AWS Certified Developer",
       issuer: "Amazon Web Services",
       date: "January 2024",
       image: "/assets/certificates/aws-certification.jpg",
     },
     {
       title: "React Advanced Certification",
       issuer: "Meta",
       date: "March 2024",
       image: "/assets/certificates/react-certificate.png",
     },
     // Add more certificates...
   ];
   ```

3. **Test the gallery** by running `npm run dev` and navigating to the Certificates section

## Current Status

Currently using placeholder images (`/assets/me.jpg`). Replace with your actual certificate images.
