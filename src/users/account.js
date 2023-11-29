import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0];
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control w-50 mt-2"
            value={account.username}
            onChange={(e) =>
              setAccount({ ...account, username: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control w-50 mt-2"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            className="form-control w-50 mt-2"
            value={account.firstName}
            placeholder="firstname"
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control w-50 mt-2"
            value={account.lastName}
            placeholder="lastname"
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control w-50 mt-2"
            value={formatDate(account.dob)}
            type="date"
            placeholder="dob"
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control w-50 mt-2"
            value={account.email}
            placeholder="email"
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-select w-50 mt-2"
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary mt-2 w-50" onClick={save}>
            Save
          </button>
          <br />
          <button className="btn btn-danger w-50 mt-2" onClick={signout}>
            Signout
          </button>
          <br />
          <Link to="/project/admin/users" className="btn btn-warning mt-2 w-50">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
