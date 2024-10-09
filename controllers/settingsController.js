const BOOKING_FORM_FIELDS = [
    { type: 'text', name: 'name', placeholder: "Nome" },
    { type: 'email', name: 'email', placeholder: "Email" },
    { type: 'datetime-local', name: 'booking_date', placeholder: "Date & Time"},
    { type: 'number', name: 'num_people', placeholder: "Numero di persone"},
    { type: 'textarea', name: 'notes', placeholder: "Note opzionali",  class: "lg:col-span-2 min-h-[100px] text-black" },
]

const HEADER_ROUTES = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'service', label: 'Service' },
    { path: 'menu', label: 'Menu' },
    { path: 'contact', label: 'Contact' }
]

exports.getSettings = (req, res) => {

    res.json({
        bookingFormFields: BOOKING_FORM_FIELDS,
        appName: 'Beije Restaurant',
        headerItems: HEADER_ROUTES
    })
}