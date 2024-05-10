import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/react';
import CardGrid from '../Cards/CardGrid';
import SearchBar from '@/Components/SearchBar';

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('characters.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Saved Characters</h2>}
        >
            <Head title="Characters" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"></div>
                    <CardGrid />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
