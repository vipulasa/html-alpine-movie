console.info('Location store loaded!');

document.addEventListener('alpine:init', () => {
    Alpine.store('location', {
        name : 'Savoy 3D Wellawaththa',
        address : 'No. 1, Savoy Building, Galle Road, Colombo 06',
        phone : '+94 11 236 6356',
        seats: 300,
        image : 'https://media.timeout.com/images/101852201/750/422/image.jpg',
        timeSlots: [
            {
                start: '10:30',
                end: '13:00',
                price : 500
            },
            {
                start: '13:30',
                end: '16:00',
                price : 500
            },
            {
                start: '16:30',
                end: '18:30',
                price : 650
            },
            {
                start: '19:00',
                end: '21:30',
                price : 800
            },
            {
                start: '22:00',
                end: '00:30',
                price : 500
            }
        ]
    })
})