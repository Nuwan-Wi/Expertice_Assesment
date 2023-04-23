import React, { useState } from "react";
import { Pg1 } from "../Components/Form/pg1.form";
import { Pg2 } from "../Components/Form/pg2.form";
import { Pg3 } from "../Components/Form/pg3.form";

function Join() {
  const  [page, setPage] = useState(1);

  return (
    <div>
      <center>
        <h2>Wanna Join</h2>
      </center>
      <div className="container">
      {
        page == 1 ? <Pg1/> : page == 2 ? <Pg2/> : <Pg3/>
      }

      <center>
      {
        page > 1 && (
          <button
        className="btn btn-primary"
        onClick={() => {
          const nextPage = page - 1;
          setPage(nextPage);
        }}
      >
        Privious
      </button>
        )
      }
      {
        page < 3 && (
          <button
        className="btn btn-primary"
        onClick={() => {
          const nextPage = page + 1;
          setPage(nextPage);
        }}
      >
        Next
      </button>
        )
      }
      
      </center>
      </div>
      
    </div>
  );
}

export default Join;
