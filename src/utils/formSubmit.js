// FormSubmit.co utility for form submissions
export const submitForm = async (formData, email = 'vaibhavbhatt2022@gmail.com') => {
  try {
    const formDataObj = new FormData()
    
    // Add all form data to FormData object
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key])
    })
    
    // Add FormSubmit.co access key
    formDataObj.append('access_key', '4a5c9e6e-8b1a-4a5a-9c7d-1d2e3f4a5b6c')
    
    // Use professional table template
    formDataObj.append('_template', 'table')
    
    // Set professional subject
    formDataObj.append('_subject', `New Contact Form Submission - ${formData.name || 'Potential Client'} - CR Technologies`)
    
    const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
      method: 'POST',
      body: formDataObj
    })
    
    if (response.ok) {
      const result = await response.json()
      return { success: true, data: result }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error: error.message }
  }
}

export default submitForm
