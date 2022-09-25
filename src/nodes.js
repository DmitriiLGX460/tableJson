import { reactive } from 'vue'

export const Nodes = reactive({
    labels: {
        title: "Титульное название",
        description: 'Описание',
        create_at: 'Время создания',

    },
    object: {
        title: '',
        description: '',
        create_at: 0,
    },
    data: [
        
    ],
    createObject(items) {
        this.data.push({
            title:            items.title,
            description:      items.description,
            create_at:        new Date().getTime()/1000
        })
    }