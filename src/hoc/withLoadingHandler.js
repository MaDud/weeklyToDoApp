import Spinner from '../UI/Spinner';

export default (Component) => {

    return props => {
        const {loading, ...passThroughtProps} = props;

        if (loading) {
            return <Spinner />
        }

        return <Component {...passThroughtProps} />
    }
}