import { useState } from "react";

function Folder({ explorer }) {
  const [expandFolder, setExpandFolder] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpandFolder((prevState) => !prevState)}>
          {explorer.name}
          <br />
        </span>

        {expandFolder && (
          <div class="subfolder">
            {explorer.items.map((exp) => {
              return <Folder key={exp.name} explorer={exp} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
}

export { Folder };
