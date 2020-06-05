import React from 'react'
import { Row } from 'antd'
import PDFViewer from 'pdf-viewer-reactjs'

const Preview = () => {
    return (
        <div>
            <PDFViewer
                document={{
                    url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
                }}
            />
        </div>
    );
}

export default Preview
