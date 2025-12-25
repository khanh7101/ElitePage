import React, { useState } from 'react';
import { useI18n } from '../contexts/i18nContext';
import { Phone, Mail, Calendar } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
    const { t } = useI18n();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        guestCount: '',
        venueType: '',
        budget: '',
        hasVenue: '',
        weddingVision: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: Add form submission logic
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-background-light pt-24 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Section - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="font-display text-4xl md:text-5xl text-stone-800 mb-4">
                                {t('contact.title')}
                            </h1>
                            <p className="text-stone-600 leading-relaxed">
                                {t('contact.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-1">{t('contact.phone.label')}</h3>
                                    <p className="text-stone-600">{t('contact.phone.value')}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-1">{t('contact.email.label')}</h3>
                                    <p className="text-stone-600">{t('contact.email.value')}</p>
                                </div>
                            </div>

                            {/* Consultation */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Calendar className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 mb-1">{t('contact.consultation.label')}</h3>
                                    <p className="text-stone-600">{t('contact.consultation.value')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.name.label')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.name.placeholder')}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.email.label')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.email.placeholder')}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.phone.label')}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.phone.placeholder')}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            {/* Wedding Date */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.weddingDate.label')}
                                </label>
                                <input
                                    type="date"
                                    name="weddingDate"
                                    value={formData.weddingDate}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.weddingDate.placeholder')}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            {/* Guest Count */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.guestCount.label')}
                                </label>
                                <input
                                    type="number"
                                    name="guestCount"
                                    value={formData.guestCount}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.guestCount.placeholder')}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            {/* Venue Type */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.venueType.label')}
                                </label>
                                <select
                                    name="venueType"
                                    value={formData.venueType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                >
                                    <option value="">{t('contact.form.venueType.placeholder')}</option>
                                    <option value="indoor">{t('contact.form.venueType.indoor')}</option>
                                    <option value="outdoor">{t('contact.form.venueType.outdoor')}</option>
                                </select>
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.budget.label')}
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.budget.placeholder')}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            {/* Has Venue */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.hasVenue.label')}
                                </label>
                                <textarea
                                    name="hasVenue"
                                    value={formData.hasVenue}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.hasVenue.placeholder')}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                />
                            </div>

                            {/* Wedding Vision */}
                            <div>
                                <label className="block text-sm font-bold text-stone-800 mb-2">
                                    {t('contact.form.weddingVision.label')}
                                </label>
                                <textarea
                                    name="weddingVision"
                                    value={formData.weddingVision}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.weddingVision.placeholder')}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button fullWidth className="mt-7">
                                {t('contact.form.submit')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
