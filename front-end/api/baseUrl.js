export default function baseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? `http://localhost:4000/` : '/';
}