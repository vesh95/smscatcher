function removeMessage(event) {
    let id = event.target.dataset.id
    let response = fetch(`/api/message/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    response.then(function(response) {
        const row = document.getElementById(`message-${id}`)
        if (response.status === 200 || response.status === 404) {
            if(row) {
                row.remove();
            }
        }
    });
}