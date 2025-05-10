
'use client';

import Footer from '@/components/footer';

import Head from 'next/head';
import Link from 'next/link'; // Import Link for client-side navigation
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

// Define types for form data and state
interface FormData {
    name: string;
    dob: string;
    contactNumber: string;
    email: string;
    yearsOfExperience: string; // Keep as string for input, convert to number on submit
    availability: string[];
    termsAccepted: boolean;
    consentForBackgroundCheck: boolean;
    captchaAnswer: string;
}

interface CaptchaState {
    question: string;
    answer: number;
}

interface AlertState {
    message: string;
    type: 'success' | 'error';
}

const SubmitApplicationPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [captcha, setCaptcha] = useState<CaptchaState>({ question: '', answer: 0 });
    const initialFormData: FormData = {
        name: '',
        dob: '',
        contactNumber: '',
        email: '',
        yearsOfExperience: '',
        availability: [],
        termsAccepted: false,
        consentForBackgroundCheck: false,
        captchaAnswer: '',
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState<AlertState | null>(null);


    // CAPTCHA Logic
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 5) + 1;
        const num2 = Math.floor(Math.random() * 4) + 1;
        setCaptcha({
            question: `${num1} + ${num2}`,
            answer: num1 + num2,
        });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // Mobile Menu Toggle
 

    // Form Input Handlers
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked, name } = e.target;

        if (type === 'checkbox') {
            if (name === 'availability[]') {
                setFormData(prev => ({
                    ...prev,
                    availability: checked
                        ? [...prev.availability, value]
                        : prev.availability.filter(item => item !== value),
                }));
            } else if (id === 'terms') {
                 setFormData(prev => ({ ...prev, termsAccepted: checked }));
            } else if (id === 'backgroundCheck') {
                 setFormData(prev => ({ ...prev, consentForBackgroundCheck: checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    // Alert Logic
    const showAlert = (message: string, type: 'success' | 'error' = 'success') => {
        setAlert({ message, type });
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    };

    // Form Submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setAlert(null);

        if (parseInt(formData.captchaAnswer) !== captcha.answer) {
            setIsLoading(false);
            showAlert("Please solve the math problem correctly.", 'error');
            generateCaptcha(); // Regenerate CAPTCHA
            setFormData(prev => ({...prev, captchaAnswer: ''})); // Clear captcha input
            return;
        }

        const payload = {
            name: formData.name,
            dob: formData.dob,
            contactNumber: formData.contactNumber,
            email: formData.email,
            yearsOfExperience: Number(formData.yearsOfExperience),
            availability: formData.availability,
            termsAccepted: formData.termsAccepted,
            consentForBackgroundCheck: formData.consentForBackgroundCheck,
        };

        try {
            // const response = await fetch('https://servizobackend.onrender.com/api/chefs', {
            const response = await fetch('/api/careers/submit', { // Changed to use the Next.js API route
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            setIsLoading(false);
            const responseData = await response.json(); // Get response data regardless of status

            if (!response.ok) {
                showAlert(responseData.message || 'Submission failed. Please try again.', 'error');
                return;
            }

            showAlert("Application submitted successfully!");
            setFormData(initialFormData); // Reset form
            generateCaptcha(); // Regenerate CAPTCHA for next submission
        } catch (error: unknown) { // Changed from any to unknown
            setIsLoading(false);
            let errorMessage = "There was an error submitting your application. Please try again.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            showAlert(errorMessage, 'error');
            console.error("Error submitting form:", error);
        }
    };
    
   

   


    return (
        <>
            <Head>
                <title>Submit Application - Servizo Careers</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Submit your application to become a chef with Servizo." />
                {/* Consider moving Tailwind CSS to a project-level setup (postcss) instead of CDN for better integration */}
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            <style jsx global>{`
                body {
                    background-color: #ffffff; /* White background for the page */
                    color: #333333; /* Default text color */
                }
                :root {
                    --header-height: 4rem; /* Used for mobile menu positioning */
                }
                @keyframes bounceIn {
                    0% { transform: translateY(-100px); }
                    50% { transform: translateY(20px); }
                    100% { transform: translateY(0); }
                }
                .bounce-in {
                    animation: bounceIn 1s ease-out;
                }
                .nav-link {
                    position: relative;
                    transition: all 0.3s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: black; /* Underline color for nav links */
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .mobile-menu-button {
                    transition: all 0.3s ease;
                }
                .mobile-menu-button.active svg { /* Rotate icon when menu is open */
                    transform: rotate(90deg);
                }
                .mobile-menu-view {
                    transition: transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;
                    transform: translateY(-20px); /* Start slightly above for slide-down effect */
                    opacity: 0;
                    visibility: hidden;
                    background-color: white; /* Ensure mobile menu has a background */
                }
                .mobile-menu-view.open {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                .loading-spinner {
                    border: 4px solid #f3f3f3; /* Light grey */
                    border-top: 4px solid #cc4c03; /* Orange color from form */
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn { /* Utility class for fadeIn animation */
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
            
           
            
            {/* Form Section */}
            <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="w-full max-w-2xl bg-[#ffffff] border border-[black] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-6 mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black text-center bounce-in">Chef Application</h1>
                    <p className="text-black text-center text-sm sm:text-base">
                        Join our team of talented chefs! Please fill out the form below.
                    </p>
                    <form id="chefApplicationForm" className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Full Name <span className="text-red-400">*</span></label>
                            <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors duration-200 bg-white/20 text-white placeholder-gray-300" required placeholder="e.g., Jane Doe" />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-black mb-1">Date of Birth <span className="text-red-400">*</span></label>
                            <input type="date" id="dob" value={formData.dob} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors duration-200 bg-white/20 text-white placeholder-gray-300" required />
                        </div>
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-medium text-black mb-1">Contact Number <span className="text-red-400">*</span></label>
                            <input type="tel" id="contactNumber" value={formData.contactNumber} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors duration-200 bg-white/20 text-white placeholder-gray-300" required placeholder="e.g., (555) 123-4567" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email Address <span className="text-red-400">*</span></label>
                            <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors duration-200 bg-white/20 text-white placeholder-gray-300" required placeholder="e.g., chef@example.com" />
                        </div>
                        <div>
                            <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-black mb-1">Years of Experience as a Chef <span className="text-red-400">*</span></label>
                            <input type="number" id="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors duration-200 bg-white/20 text-white placeholder-gray-300" required min="0" placeholder="e.g., 5"/>
                        </div>
                        <div>
                            <label htmlFor="captchaAnswer" className="block text-sm font-medium text-black mb-1">What is <span id="captchaQuestion" className="font-semibold">{captcha.question}</span>? (Anti-spam) <span className="text-red-400">*</span></label>
                            <input type="number" id="captchaAnswer" value={formData.captchaAnswer} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors duration-200 bg-white/20 text-white placeholder-gray-300" required placeholder="Your answer"/>
                        </div>
                        <fieldset>
                            <legend className="block text-sm font-medium text-black mb-2">Available Work Hours and Days <span className="text-red-400">*</span></legend>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {['weekends', 'evenings', 'full-time'].map(option => (
                                    <label key={option} className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-md hover:bg-white/20 transition-colors cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            name="availability[]" 
                                            value={option} 
                                            checked={formData.availability.includes(option)}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-[#cc4c03] bg-gray-100 border-gray-300 rounded focus:ring-[#cc4c03] focus:ring-offset-0" 
                                        />
                                        <span className="text-sm text-black capitalize">{option.replace('-', ' ')}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                         <fieldset className="space-y-3 pt-2">
                            <legend className="sr-only">Consents and Agreements</legend>
                            <label className="flex items-center space-x-2.5 cursor-pointer">
                                <input type="checkbox" id="terms" checked={formData.termsAccepted} onChange={handleInputChange} className="w-4 h-4 text-[#cc4c03] bg-gray-100 border-gray-300 rounded focus:ring-[#cc4c03] focus:ring-offset-0" required />
                                <span className="text-sm text-black">I agree to the <Link href="/terms-and-conditions" className="underline hover:text-white">Terms & Conditions</Link> <span className="text-red-400">*</span></span>
                            </label>
                            <label className="flex items-center space-x-2.5 cursor-pointer">
                                <input type="checkbox" id="backgroundCheck" checked={formData.consentForBackgroundCheck} onChange={handleInputChange} className="w-4 h-4 text-[#cc4c03] bg-gray-100 border-gray-300 rounded focus:ring-[#cc4c03] focus:ring-offset-0" required />
                                <span className="text-sm text-black">I consent to a Background Check <span className="text-red-400">*</span></span>
                            </label>
                        </fieldset>
                        <button 
                            type="submit" 
                            className="w-full bg-[#2bbc07] text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-200 text-base font-semibold transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed" 
                            disabled={isLoading || !formData.termsAccepted || !formData.consentForBackgroundCheck}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : 'Submit Application'}
                        </button>
                    </form>
                </div>
            </main>

            <Footer/>
          
            {isLoading && (
                <div id="loadingOverlay" className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1001]">
                    <div className="loading-spinner"></div>
                </div>
            )}

            {alert && (
                <div id="customAlertContainer" className="fixed top-20 right-4 space-y-2 z-[1002] w-full max-w-xs sm:max-w-sm"> {/* Adjusted top to avoid navbar overlap */}
                     <div
                        className={`p-4 rounded-md shadow-lg text-sm min-w-[250px] animate-fadeIn flex items-center space-x-3
                            ${alert.type === 'success' ? 'bg-green-50 text-green-700 border border-green-300' : ''}
                            ${alert.type === 'error' ? 'bg-red-50 text-red-700 border border-red-300' : ''}
                        `}
                        role="alert"
                    >
                        <span>
                            {alert.type === 'success' ? '✅' : '❌'}
                        </span>
                        <span>{alert.message}</span>
                    </div>
                </div>
            )}

            
        </>
    );
};

export default SubmitApplicationPage;