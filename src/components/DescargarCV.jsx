import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer'
import 

export const DescargarCV = () => {

  return (
    <div >
        <PDFDownloadLink document={} />} fileName='dailinromeroCV.pdf'>
        {
          ({loading, url, error, blob}) => 
            loading ? (
              <p style={{position: 'absolute', bottom: 0, fontSize: '16px'}}>
                Descargando... 
              </p>
              
            ): (
              null
            )
        }
        </PDFDownloadLink>
    </div>
  );
};