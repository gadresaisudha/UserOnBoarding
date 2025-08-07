import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/api';
import { User } from '../types/User';
import BackButton from '../components/backbutton';

const DataTablePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <BackButton />
      <h2 style={{ margin: 0 }}>User Data Table</h2>
    </div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table border={1} cellPadding={8} cellSpacing={0} style={{ width: '100%', marginTop: '16px' }}>
          <thead>
            <tr>
              <th>Email</th>
              <th>About Me</th>
              <th>Birthdate</th>
              <th>Address</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.aboutme || '-'}</td>
                <td>{user.birthdate || '-'}</td>
                <td>
                  {user.address
                    ? `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zipcode}`
                    : '-'}
                </td>
                <td>{user.createdAt ? new Date(user.createdAt).toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

  
    </div>
  );
};

export default DataTablePage;