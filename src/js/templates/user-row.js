export default `
  <th scope="row"><%- id %></th>
  <td>
    <% if (isEdit) { %>
      <label class="form-label">
        <input
          type="text"
          id="user-name-<%- id %>"
          class="form-control _user-name"
          value="<%- name.value %>"
          placeholder="name"
        />
        <% if (!name.isCorrect) { %>
          <p class="form-error-msg text-danger m-0">
            Incorrect name filed
          </p>
        <% } %>
      </label>
    <% } else { %>
      <%- name.value %>
    <% } %>
  </td>
  <td>
    <% if (isEdit) { %>
      <label class="form-label">
        <input
          type="text"
          id="user-tel-<%- id %>"
          class="form-control _user-tel"
          value="<%- tel.value %>"
          placeholder="999-99-999-999"
        />
        <% if (!tel.isCorrect) { %>
          <p class="form-error-msg text-danger m-0">Incorrect tel filed</p>
        <% } %>
      </label>
    <% } else { %>
      <%- tel.value %>
    <% } %>
  </td>
  <td class="table-actions">
    <% if (isEdit) { %>
      <button
        type="button"
        class="
          btn btn-primary btn-sm
          px-3
          mb-1 mb-sm-0
          mx-1
          _btn-save
        "
      >
        <svg class="btn__svg _save-svg" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10.5" height="12"><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"></path></svg>
      </button>
    <% } else { %>
      <button
        type="button"
        class="
          btn btn-secondary btn-sm
          px-3
          mb-1 mb-sm-0
          mx-1
          _btn-edit
        "
      >
        <svg class="btn__svg" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="13.5" height="12"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
      </button>
    <% } %>
    <button
      type="button"
      class="
        btn btn-danger btn-sm
        px-3
        mb-1 mb-sm-0
        mx-1
        _btn-remove
      "
    >
      <svg class="btn__svg _trash-svg" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10.5" height="12"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
    </button>
  </td>
`;
