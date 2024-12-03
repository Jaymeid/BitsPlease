import React, { useState } from 'react';
import axios from 'axios';
import { Container,Input, Button, ErrorMessage,LoadingMessage, ImageContainer, Image, Marker, CoordinatesList, CoordinateItem, SaveButton, Title, InputSection} from './collApp.component.styled';

const CollApp = () => {
    const [sessionId, setSessionId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [coordinates, setCoordinates] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const pocketBaseUrl = '';

    const fetchImage = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(
                `${pocketBaseUrl}/api/collections/dom_images/records?filter=(sessionId='${sessionId}')`
            );

            if (response.data.items.length > 0) {
                const imageRecord = response.data.items[0];
                setImageUrl(`${pocketBaseUrl}/files/dom_images/${imageRecord.id}/${imageRecord.image}`)
                setCoordinates([]);
            } else {
                setError('No image found for the provided Session ID');
            }
        } catch (err) {
            console.error('Error fetching image:', err);
            setError('Error fetching image from the database.')
        } finally {
            setLoading(false);
        }
    };

    const handleImageClick = (event) => {
        if (!imageUrl) return;

        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setCoordinates([...coordinates, { x, y }]);
    };

    const saveCoordinates = async () => {
        try {
            await axios.post(`${pocketBaseUrl}/api/collections/coordinates/records`, {
                sessionId,
                coordinates,
              });
              alert('Coordinates saved successfully!');
            } catch (err) {
              console.error('Error saving coordinates:', err);
              alert('Failed to save coordinates');
            }
          };

        return (
            <Container>
                <Title>Colleague App - Enter Session ID</Title>

                <InputSection>
                    <Input
                    type="text"
                    placeholder="Enter Session ID"
                    value={sessionId}
                    onChange={(e) => setSessionId(e.target.value)}
                    />
                    <Button onClick={fetchImage}>Fetch Image</Button>
                </InputSection>

                {loading && <LoadingMessage>Loading image...</LoadingMessage>}

                {error && <ErrorMessage>{error}</ErrorMessage>}

                {imageUrl ? (
                    <ImageContainer>
                        <Image src={imageUrl} alt="DOM" onClick={handleImageClick} />
                        {coordinates.map((coord, index) => (
                            <Marker top={coord.y} left={coord.x}px/>
                        ))}
                    </ImageContainer>
                ) : (
                    <p>No image loaded. Enter a Session ID to fetch the image.</p>
                  )}
                  {coordinates.length > 0 && (
                    <div>
                    <h2>Captured Coordinates:</h2>
                    <CoordinatesList>
                        {coordinates.map((coord, index) => (
                        <CoordinateItem key={index}>
                            Point {index + 1}: (X: {coord.x}, Y: {coord.y})
                        </CoordinateItem>
                        ))}
                    </CoordinatesList>
                    <SaveButton onClick={saveCoordinates}>Save Coordinates</SaveButton>
                    </div>
                )}
                </Container>
            );
        };

    export default CollApp;