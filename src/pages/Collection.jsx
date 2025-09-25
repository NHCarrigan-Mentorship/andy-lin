function Collection() {
  return (
    <div className="bg-gray-600 font-bold min-h-screen">
      <h1 className="text-center text-4xl p-4">Collection</h1>
      <div id="completed">
        <h1 className="pl-4 text-3xl underline bg-blue-600">Completed</h1>
        <div id="completedList"></div>
      </div>
      <div id="backlog">
        <h1 className="pl-4 text-3xl underline bg-yellow-600">Backlog</h1>
        <div id="backlogList"></div>
      </div>
      <div id="wishlist">
        <h1 className="pl-4 text-3xl underline bg-red-800">Wishlist</h1>
        <div id="wishlistList"></div>
      </div>
    </div>
  );
}

export default Collection;
