export default function({ store, redirect }) {
    console.log('middleware: funcionando');
    if (store.state.users.user === '') {
        return redirect ('/auth/login')
    }
}