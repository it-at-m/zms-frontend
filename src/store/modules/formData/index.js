import actions from './actions.js'
import mutations from './mutations.js'

const state = {
    service: null,
    providers: [],
    appointment: null,
    appointmentCounts: {},
    appointmentCount: 1
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters: {}
}