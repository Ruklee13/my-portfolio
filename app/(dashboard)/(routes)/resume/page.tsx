'use client'
import React from 'react';
import PdfViewer from '@/components/Pdfviewer';

const PdfPage = () => {
    const pdfUrl = '/Resume.pdf'; // Replace with your PDF URL

    return (
        <div className=' h-full w-full'>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default PdfPage;
