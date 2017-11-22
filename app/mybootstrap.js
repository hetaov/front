
export default function bootstrap(schema) {
    const state = schema.getDefaultState();
    console.log(state, 'state ..');
    const session = schema.withMutations(state);
    const { Word } = session;
    Word.create({
        id: 0, // optional. If omitted, Redux-ORM uses a number sequence starting from 0.
        text: 'Tommi',
    });
    
    return {
        orm: state
    };
}
