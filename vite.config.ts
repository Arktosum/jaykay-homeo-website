import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const clinicId = (env.VITE_CLINIC_ID || process.env.VITE_CLINIC_ID || '').toLowerCase();
  const isVivek = clinicId === 'vivekananthan' || clinicId === 'vivek';

  const clinicName = isVivek ? 'Dr.Vivekananthan Homeopathy Clinic' : 'Jayakanthan Homeopathy Clinic';
  const clinicOgTitle = isVivek
    ? 'Dr.Vivekananthan Homeopathy Clinic | Perundurai, Erode'
    : 'Jayakanthan Homeopathy Clinic | 42 Years Experience in Perundurai';
  const clinicOgDesc = isVivek
    ? 'High class original pure homeopathy medical treatment in Perundurai, Erode. Phone: +91 94427 26598, +91 83009 48421.'
    : 'High class original pure homeopathy of 42 years of experience by Dr. N. Jayakanthan in Perundurai, Erode. Phone: +91 94427 26598, +91 83009 48421.';
  const clinicAuthor = isVivek ? 'Dr. J. Vivekananthan' : 'Dr. N. Jayakanthan';

  // Make these variables available to HTML %VITE_...% placeholders
  process.env.VITE_CLINIC_NAME = clinicName;
  process.env.VITE_CLINIC_OG_TITLE = clinicOgTitle;
  process.env.VITE_CLINIC_OG_DESC = clinicOgDesc;
  process.env.VITE_CLINIC_AUTHOR = clinicAuthor;

  return {
    plugins: [react()],
  };
});
