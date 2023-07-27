console.info('Location store loaded!');

document.addEventListener('alpine:init', () => {
    Alpine.store('location', {
        name : 'Savoy 3D Wellawaththa',
        address : 'No. 1, Savoy Building, Galle Road, Colombo 06',
        phone : '+94 11 236 6356',
        seats: 300,
        timeSlots: [
            
        ]
    })
})