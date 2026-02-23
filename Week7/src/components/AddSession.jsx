import React, { useState } from 'react';
import PostUserSession from '../services/PostUserSession';
import './AddSession.css'; // Import the CSS file

const AddSession = ({ onAddSession }) => {
    const [sessionName, setSessionName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSession = { sessionName, startTime, endTime };

        try {
            const result = await PostUserSession(newSession);
            setResponseMessage(`Session added: ${result}`);
            onAddSession(newSession);
        } catch (error) {
            console.error(error);
            setResponseMessage(error.message);
        }

        setSessionName('');
        setStartTime('');
        setEndTime('');
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !prev);
    };

    return (
        <div className="add-session-container">
            <button className="add-session-toggle-button" onClick={toggleFormVisibility}>
                {isFormVisible ? 'Hide Form' : 'Add Session'}
            </button>
            {isFormVisible && (
                <div>
                    <h2>Add Session</h2>
                    <form className="add-session-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label>
                                Session Name:
                                <input
                                    type="text"
                                    value={sessionName}
                                    onChange={(e) => setSessionName(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                Start Time:
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                End Time:
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <button className="submit-button" type="submit">Add Session</button>
                    </form>
                    {responseMessage && <p className="response-message">{responseMessage}</p>}
                </div>
            )}
        </div>
    );
};

export default AddSession;
