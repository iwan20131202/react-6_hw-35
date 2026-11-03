import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();
  
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Ivan', number: '123-45-67' },
    { id: '2', name: 'Anna', number: '987-65-43' },
    { id: '3', name: 'Boris', number: '555-55-55' },
  ]);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicate) {
      alert(`${name} вже є у контактах!`);
      return;
    }

    const newContact = { id: Date.now().toString(), name, number };
    setContacts(prev => [...prev, newContact]);

    setName('');
    setNumber('');
  };

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedContacts = [...filteredContacts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div style={{ marginTop: '20px', display: 'flex', gap: '40px' }}>
      <div style={{ flex: 1, maxWidth: '320px' }}>
        <h2>Додати новий контакт</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Ім'я
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Телефон
            <input type="tel" value={number} onChange={e => setNumber(e.target.value)} required />
          </label>
          <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Додати</button>
        </form>
      </div>

      <div style={{ flex: 2 }}>
        <h2>Ваші контакти ({contacts.length})</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Пошук..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{ width: '10px', minWidth: '250px', padding: '6px' }}
          />
        </div>

        <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setSortOrder('asc')} 
            style={{ 
              padding: '6px 12px', 
              cursor: 'pointer',
              backgroundColor: sortOrder === 'asc' ? '#4CAF50' : '#f1f1f1',
              color: sortOrder === 'asc' ? 'white' : 'black',
              border: '1px solid #ccc'
            }}
          >
            A → Z
          </button>
          <button 
            onClick={() => setSortOrder('desc')} 
            style={{ 
              padding: '6px 12px', 
              cursor: 'pointer',
              backgroundColor: sortOrder === 'desc' ? '#4CAF50' : '#f1f1f1',
              color: sortOrder === 'desc' ? 'white' : 'black',
              border: '1px solid #ccc'
            }}
          >
            Z → A
          </button>
        </div>

        {sortedContacts.length === 0 ? (
          <p>Контактів не знайдено</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sortedContacts.map(({ id, name, number }) => (
              <li key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                <span><strong>{name}</strong>: {number}</span>
                <button onClick={() => handleDelete(id)} style={{ padding: '4px 8px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
