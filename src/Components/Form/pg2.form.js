import React from "react";

export const Pg2 = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label class="form-label">Name of the Reservation</label>
          <input type="text" class="form-control" id="reservation" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Town</label>
          <input type="text" class="form-control" id="town" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Country</label>
          <input type="text" class="form-control" id="country" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Description about Reservation</label> <br />
          <input type="text" class="form-control" id="reservation" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Property Amenities</label> <br />
          <input type="text" class="form-control" id="reservation" required />
        </div>
      </form>
    </div>
  );
};
