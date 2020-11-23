class AddAudioSourceToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :audio_source, :string
  end
end
