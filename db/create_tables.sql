drop table categories cascade;
drop table items;

-- Catgories
create table if not exists categories (
    id serial primary key,

    name varchar(50) not null unique,
    description text
);

-- Items
create table if not exists items (
    id serial primary key,
    name varchar(200) not null,
    description text not null,
    category_id integer not null,
    foreign key (category_id) references categories (id) on delete cascade
);


insert into categories (name, description) values
    ('Electronics', 'Gadgets to make life easier'),
    ('Car Parts', 'Expensive stuff for the box with 4 wheels'),
    ('Sports', 'Get out and play!'),
    ('Video Games', 'Stay in and play!')
;

insert into items (name, description, category_id) values
    ('Skyrim', 'Awesome open-world RPG', 4),
    ('World of Warcraft', 'Popular MMORPG', 4),
    ('iPhone', 'Apple''s flagship smartphone', 1),
    ('Greg Norman gold clubs', 'At least you can look like a pro', 3)

