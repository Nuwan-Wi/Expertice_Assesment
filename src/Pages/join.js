import React from "react";

function Join() {
  return (
    <div>
      <center>
        <h2>Wanna Join</h2>
      </center>
      <div className="container">
        <form>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Profecion</label> <br />
            <select class="form-select" aria-label="Default select example">
              <option value="" disabled selected>
                Your Profetion
              </option>
              <option value="">Resturent Awner</option>
              <option value="">Destination Services Provider</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
