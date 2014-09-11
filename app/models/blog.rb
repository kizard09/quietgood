class Blog < ActiveRecord::Base
	validates :name, presence: true
	has_many :heros
	belongs_to :read
end
