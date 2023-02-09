const app = Vue.createApp({

    setup(){
        const title = "Mi titulo desde el script sdsd";
        const experiences = [
            {id: 01, title:"Mi primera experiecia"},
            {id: 02, title:"Mi segunda experiencia"},
        ]

        return {
            title,
            experiences
        }
    }

})