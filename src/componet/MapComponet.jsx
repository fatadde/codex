import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '95%',
  height: '500px'
};

const center = {
  lat: 4.8156,
  lng: 7.0498
};

function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBAv_88NebcKSS_h45NJsICWa9Nryf_3XY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13} >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
