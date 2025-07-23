import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = ({ handleSignUp }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const userType = watch('userType'); // Watch userType to conditionally render fields

    const onSubmit = (data) => {
        handleSignUp(data);
    };
    const handleUserTypeSelection = (type) => {
        // Update card styling
        document.querySelectorAll('.user-type-card').forEach((card) => {
            card.classList.remove('border-blue-500', 'border-green-500', 'bg-blue-50', 'bg-green-50');
            card.classList.add('border-gray-200');
        });

        const selectedCard = document.querySelector(`input[value="${type}"]`)?.parentElement.querySelector('.user-type-card');
        if (selectedCard) {
            selectedCard.classList.remove('border-gray-200');
            selectedCard.classList.add(type === 'customer' ? 'border-blue-500' : 'border-green-500');
            selectedCard.classList.add(type === 'customer' ? 'bg-blue-50' : 'bg-green-50');
        }
    };

    return (
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">💰</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account!</h2>
                    <p className="text-gray-600">Join Finbuddy today</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* User Type Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">I am a:</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="relative">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="customer"
                                    className="sr-only"
                                    {...register('userType', { required: 'Please select a user type' })}
                                    onClick={() => handleUserTypeSelection('customer')}
                                />
                                <div className="user-type-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                                    <div className="text-center">
                                        <span className="text-2xl mb-2 block">🛍️</span>
                                        <span className="text-sm font-medium text-gray-700">Customer</span>
                                    </div>
                                </div>
                            </label>
                            <label className="relative">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="retailer"
                                    className="sr-only"
                                    {...register('userType', { required: 'Please select a user type' })}
                                    onClick={() => handleUserTypeSelection('retailer')}
                                />
                                <div className="user-type-card border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-green-500 transition-colors">
                                    <div className="text-center">
                                        <span className="text-2xl mb-2 block">🏪</span>
                                        <span className="text-sm font-medium text-gray-700">Retailer</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                        {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType.message}</p>}
                    </div>

                    {/* Common Fields */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email address',
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password*
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                        {...register('phone', { required: 'Phone Number is required' })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}

                    {/* Conditional Fields */}
                    {userType === 'customer' && (
                        <div>
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                    {...register('fullName', { required: 'Full Name is required' })}
                                />
                                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of Birth*
                                </label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your date of birth"
                                    {...register('dateOfBirth', { required: 'Date of Birth is required' })}
                                />
                                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                            </div>
                        </div>


                    )}

                    {userType === 'retailer' && (
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                                Business Name*
                            </label>
                            <input
                                type="text"
                                id="businessName"
                                name="businessName"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your business name"
                                {...register('businessName', { required: 'Business Name is required' })}
                            />
                            {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>}

                            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                                Business Type*
                            </label>
                            <select
                                id="businessType"
                                name="businessType"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                {...register('businessType', { required: 'Business Type is required' })}
                            >
                                <option value="">Select business type</option>
                                <option value="retail">Retail Store</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="services">Services</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>}
                            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                GST number
                            </label>
                            <input
                                type="text"
                                id="gst"
                                name="gst"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your GST number"
                            />
                            <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                Business Address*
                            </label>
                            <input
                                type="text"
                                id="businessAddress"
                                name="businessAddress"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter your business address"
                                {...register('businessAddress', { required: 'Business Address is required' })}
                            />
                            {errors.businessAddress && <p className="text-red-500 text-sm mt-1">{errors.businessAddress.message}</p>}

                        </div>
                    )}

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;