# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Painting.destroy_all
paintings = Painting.create(
  [
    { name: 'Promenade au bord de la mer', address: 'Musée Sorolla', year: 1909 },
    { name: 'Cousant la voile', address: 'Fondazione Musei Civici di Venezia', year: 1896 },
    { name: 'Le Bain du cheval', address: 'Musée Sorolla, Madrid', year: 1909 }
  ]
)
