@vladimir_putins_brain = {
  :name => "vladimir putin",
  :launch_code => "a5Mjp257GHMGH23e5qxE",
  :fav_hobby => "Riding ponies",
  :prideful => true
}

p @vladimir_putins_brain[:fav_hobby]
p @vladimir_putins_brain[:launch_code]
@vladimir_putins_brain[:obsessive_crush] = "Condoleezza Rice"
@vladimir_putins_brain.merge!({:torture_count => 931})
p @vladimir_putins_brain
p "#{@vladimir_putins_brain[:name]} loves #{@vladimir_putins_brain[:fav_hobby].downcase}"

@batman = {
  :f_name => "Bruce",
  l_name: "Wayne",
  :billionaire => true,
  alter_ego: "Batman",
  villains: ["The Penguin", "The Joker", "The Riddler"],
  sidekicks: [
    {f_name: "Jason", l_name: "Todd", alter_ego: "Robin"},
    {f_name: "Dick", l_name: "Grayson", alter_ego: "Robin"},
    {f_name: "Tim", l_name: "Drake", alter_ego: "Robin"},
  ]
}

@origin = "Having witnessed the murder of his parents as a child, he swore revenge on #{@batman[:villains][2]}, an oath tempered with a sense of justice with his best friend #{@batman[:sidekicks][0][:f_name]} #{@batman[:sidekicks][1][:l_name]} otherwise known as #{@batman[:sidekicks][1][:alter_ego]}"

p @origin

@irkat = {
  :course => "WDI",
  :location => "Santa Monica",
  :instance => 43,
  :instructors => ["Kate", "Ira"],
  :num_students => 19
}

description = "#{@irkat[:instructors][0]} and #{@irkat[:instructors][1]} are teaching #{@irkat[:num_students]} in #{@irkat[:course]} #{@irkat[:instance]} in #{@irkat[:location]}."

@irkat[:students] = [
  "Rubi",
  "Thomas",
  "Eric",
  "Tim",
  "Jake",
  "Billie",
  "Gus",
  "Rick",
  "Steven",
  "Alex",
  "Boone",
  "Brian",
  "Esau",
  "Laura",
  "James",
  "Betsy",
  "Matt",
  "Doyle",
  "John"
]

p @irkat

@irkat[:students].sort!

p @irkat[:students]

p "#{@irkat[:students].count {|student| student.include? 'e'}} students have a letter 'e' in their name: #{(@irkat[:students].select {|student| student.include? 'e'}).join(', ')}"
