import React from 'react';
import PropTypes from 'prop-types';

const Bonuses = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [participateModalOpen, setParticipateModalOpen] = useState(false);

    const loadData = async () => {
        setLoading(true);
        setError(null);
        setData(null);
        setParticipateModalOpen(false);
        try {
            setData(await getJSON('/cashback'));
        } catch (e) {
            setData(null);
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

        </div>
    );
};

Bonuses.propTypes = {

};

export default Bonuses;