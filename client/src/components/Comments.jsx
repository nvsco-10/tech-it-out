import React from "react";

export default function Comment() {
  return (
    <div>
      <div className="comments">
        {/* {{#each this}} */}
        <section className="comment">
          <div className="meta">
            {/* {{user.username}} on {{format_date created_at}} */}
          </div>
          <div className="text">{/* {{comment_text}} */}</div>
        </section>
        {/* {{/each}} */}
      </div>
    </div>
  );
}
