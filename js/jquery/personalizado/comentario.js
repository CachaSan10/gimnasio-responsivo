// --- Funcionalidad de Publicar Nuevo Comentario ---
$('#new-comment-form').submit(function(event) {
    event.preventDefault();
    const authorName = $('#comment-author').val().trim();
    const commentText = $('#comment-text').val().trim();
    const commentsContainer = $('#comments-container');
  
    if (authorName !== '' && commentText !== '') {
      const newComment = `
        <div class="comment">
          <div class="avatar"><i class="bi bi-person"></i></div>
          <div class="comment-body">
            <p class="comment-text">${commentText}</p>
            <div class="comment-actions">
              <button class="btn btn-sm btn-outline-primary reply-btn">Responder</button>
              <button class="btn btn-sm btn-outline-secondary highlight-btn">Destacar</button>
            </div>
            <div class="replies-container">
              </div>
          </div>
        </div>
      `;
      commentsContainer.prepend(newComment); // Agregar el nuevo comentario al principio
      $('#comment-author').val(''); // Limpiar el formulario
      $('#comment-text').val('');
    } else {
      alert('Por favor, ingresa tu nombre y comentario.');
    }
  });
  
  // --- Funcionalidad de Publicar Respuesta ---
  $(document).on('click', '.post-reply-btn', function() {
    const replyTextarea = $(this).siblings('.mb-2').find('textarea');
    const replyText = replyTextarea.val().trim();
    const repliesContainer = $(this).closest('.replies-container');
  
    if (replyText !== '') {
      const newReply = `
        <div class="comment reply">
          <div class="avatar"><i class="bi bi-person"></i></div>
          <div class="comment-body">
            <p class="comment-text">${replyText}</p>
          </div>
        </div>
      `;
      repliesContainer.append(newReply);
      $(this).closest('.reply-form').remove(); // Eliminar el formulario de respuesta
    } else {
      alert('Por favor, ingresa tu respuesta.');
    }
  });
  