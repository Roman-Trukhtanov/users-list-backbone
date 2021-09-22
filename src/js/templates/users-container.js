export default `
  <div id="users-container" class="users__container">
    <div class="users__table-wrap">
      <table
        id="users-table"
        class="table table-striped table-responsive bg-light"
      >
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Tel</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    
    <form id="add-user-form">
      <div class="users__add-user-wrap">
        <!-- Name input -->
        <div>
          <label class="form-label">
            <p class="form-label-text">Name</p>
            <input
              type="text" 
              id="base-name-input"
              class="form-control"
              placeholder="name"
            />
          </label>
        </div>
      
        <!-- Tel input -->
        <div>
          <label class="form-label">
            <p class="form-label-text">Tel</p>
            <input
              type="text"
              id="base-tel-input"
              class="form-control"
              placeholder="999-99-999-999"
            />
          </label>
        </div>
      
        <div class="users__controls">
            <!-- Add button -->
            <button
              class="btn btn-success _add-user-btn"
              type="submit">
                Add User
            </button>
        </div>
      </div>
    </form>
  </div>
`;
