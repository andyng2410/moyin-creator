// Copyright (c) 2025 hotflow2024
// Licensed under AGPL-3.0-or-later. See LICENSE for details.
// Commercial licensing available. See COMMERCIAL_LICENSE.md.
/**
 * Director Presets — 导演面板预设常量
 *
 * 从 director-store.ts 中抽离的所有预设常量和派生类型。
 * 供 split-scenes.tsx、split-scene-card.tsx、prompt-builder.ts 等模块导入。
 */

// ==================== 景别预设 (Shot Size) ====================

export const SHOT_SIZE_PRESETS = [
  { id: 'ws', label: 'Toàn cảnh xa', labelEn: 'Wide Shot', abbr: 'WS', promptToken: 'wide shot, establishing shot, distant view' },
  { id: 'ls', label: 'Toàn cảnh', labelEn: 'Long Shot', abbr: 'LS', promptToken: 'long shot, full body shot' },
  { id: 'mls', label: 'Trung toàn cảnh', labelEn: 'Medium Long Shot', abbr: 'MLS', promptToken: 'medium long shot, knee shot' },
  { id: 'ms', label: 'Trung cảnh', labelEn: 'Medium Shot', abbr: 'MS', promptToken: 'medium shot, waist shot' },
  { id: 'mcu', label: 'Trung cận cảnh', labelEn: 'Medium Close-Up', abbr: 'MCU', promptToken: 'medium close-up, chest shot' },
  { id: 'cu', label: 'Cận cảnh', labelEn: 'Close-Up', abbr: 'CU', promptToken: 'close-up, face shot' },
  { id: 'ecu', label: 'Đặc tả', labelEn: 'Extreme Close-Up', abbr: 'ECU', promptToken: 'extreme close-up, detail shot' },
  { id: 'pov', label: 'Góc nhìn chủ quan', labelEn: 'POV Shot', abbr: 'POV', promptToken: 'point of view shot, first person perspective' },
] as const;

export type ShotSizeType = typeof SHOT_SIZE_PRESETS[number]['id'];

// ==================== 时长预设 (Duration) ====================

export const DURATION_PRESETS = [
  { id: 4, label: '4 giây', value: 4 },
  { id: 5, label: '5 giây', value: 5 },
  { id: 6, label: '6 giây', value: 6 },
  { id: 7, label: '7 giây', value: 7 },
  { id: 8, label: '8 giây', value: 8 },
  { id: 9, label: '9 giây', value: 9 },
  { id: 10, label: '10 giây', value: 10 },
  { id: 11, label: '11 giây', value: 11 },
  { id: 12, label: '12 giây', value: 12 },
] as const;

// 时长类型: 4-12 秒
export type DurationType = number;

// ==================== 音效标签预设 (Sound Effects) ====================

export const SOUND_EFFECT_PRESETS = {
  // Thiên nhiên
  nature: [
    { id: 'wind', label: 'Tiếng gió', promptToken: 'wind blowing sound' },
    { id: 'rain', label: 'Tiếng mưa', promptToken: 'rain falling sound' },
    { id: 'thunder', label: 'Tiếng sấm', promptToken: 'thunder rumbling' },
    { id: 'birds', label: 'Tiếng chim', promptToken: 'birds chirping' },
    { id: 'water', label: 'Tiếng nước chảy', promptToken: 'water flowing sound' },
    { id: 'waves', label: 'Tiếng sóng biển', promptToken: 'ocean waves crashing' },
  ],
  // Hành động nhân vật
  action: [
    { id: 'footsteps', label: 'Tiếng bước chân', promptToken: 'footsteps sound' },
    { id: 'breathing', label: 'Tiếng thở', promptToken: 'heavy breathing' },
    { id: 'heartbeat', label: 'Tiếng tim đập', promptToken: 'heartbeat pounding' },
    { id: 'fighting', label: 'Tiếng đánh nhau', promptToken: 'fighting impact sounds' },
    { id: 'running', label: 'Tiếng chạy', promptToken: 'running footsteps' },
  ],
  // Hiệu ứng bầu không khí
  atmosphere: [
    { id: 'suspense', label: 'Hồi hộp', promptToken: 'suspenseful ambient sound' },
    { id: 'dramatic', label: 'Kịch tính', promptToken: 'dramatic sound effect' },
    { id: 'peaceful', label: 'Yên bình', promptToken: 'peaceful ambient sound' },
    { id: 'tense', label: 'Căng thẳng', promptToken: 'tense atmosphere sound' },
    { id: 'epic', label: 'Sử thi', promptToken: 'epic cinematic sound' },
  ],
  // Môi trường đô thị
  urban: [
    { id: 'traffic', label: 'Tiếng xe cộ', promptToken: 'traffic noise' },
    { id: 'crowd', label: 'Tiếng đám đông', promptToken: 'crowd murmuring' },
    { id: 'siren', label: 'Tiếng còi báo động', promptToken: 'siren wailing' },
    { id: 'horn', label: 'Tiếng còi xe', promptToken: 'car horn honking' },
  ],
} as const;

export type SoundEffectTag = 
  | typeof SOUND_EFFECT_PRESETS.nature[number]['id']
  | typeof SOUND_EFFECT_PRESETS.action[number]['id']
  | typeof SOUND_EFFECT_PRESETS.atmosphere[number]['id']
  | typeof SOUND_EFFECT_PRESETS.urban[number]['id'];

// ==================== 拍摄控制预设（每个分镜独立） ====================

// 灯光风格预设 (Gaffer)
export const LIGHTING_STYLE_PRESETS = [
  { id: 'high-key' as const, label: 'Sáng cao', labelEn: 'High-Key', emoji: '☀️', promptToken: 'high-key lighting, bright and even,' },
  { id: 'low-key' as const, label: 'Tối trầm', labelEn: 'Low-Key', emoji: '🌑', promptToken: 'low-key lighting, dramatic shadows, film noir,' },
  { id: 'silhouette' as const, label: 'Bóng đen', labelEn: 'Silhouette', emoji: '🌅', promptToken: 'silhouette, backlit figure against bright background,' },
  { id: 'chiaroscuro' as const, label: 'Sáng tối', labelEn: 'Chiaroscuro', emoji: '🎨', promptToken: 'chiaroscuro lighting, Rembrandt style, strong contrast,' },
  { id: 'natural' as const, label: 'Ánh sáng tự nhiên', labelEn: 'Natural', emoji: '🌤️', promptToken: 'natural lighting,' },
  { id: 'neon' as const, label: 'Neon', labelEn: 'Neon', emoji: '💜', promptToken: 'neon lighting, vibrant colored lights,' },
  { id: 'candlelight' as const, label: 'Ánh nến', labelEn: 'Candlelight', emoji: '🕯️', promptToken: 'candlelight, warm dim golden glow,' },
  { id: 'moonlight' as const, label: 'Ánh trăng', labelEn: 'Moonlight', emoji: '🌙', promptToken: 'moonlight, soft cold blue illumination,' },
] as const;

// 灯光方向预设
export const LIGHTING_DIRECTION_PRESETS = [
  { id: 'front' as const, label: 'Ánh sáng trực diện', labelEn: 'Front', emoji: '⬆️', promptToken: 'front lighting,' },
  { id: 'side' as const, label: 'Ánh sáng bên', labelEn: 'Side', emoji: '➡️', promptToken: 'dramatic side lighting,' },
  { id: 'back' as const, label: 'Ngược sáng', labelEn: 'Back', emoji: '⬇️', promptToken: 'backlit,' },
  { id: 'top' as const, label: 'Ánh sáng trên', labelEn: 'Top', emoji: '🔽', promptToken: 'overhead top lighting,' },
  { id: 'bottom' as const, label: 'Ánh sáng dưới', labelEn: 'Bottom', emoji: '🔼', promptToken: 'underlighting, eerie,' },
  { id: 'rim' as const, label: 'Ánh sáng viền', labelEn: 'Rim', emoji: '💫', promptToken: 'rim light, edge glow separating subject from background,' },
  { id: 'three-point' as const, label: 'Ba điểm sáng', labelEn: 'Three-Point', emoji: '🔺', promptToken: 'three-point lighting setup,' },
] as const;

// 色温预设
export const COLOR_TEMPERATURE_PRESETS = [
  { id: 'warm' as const, label: 'Ấm 3200K', labelEn: 'Warm', emoji: '🟠', promptToken: 'warm color temperature 3200K,' },
  { id: 'neutral' as const, label: 'Trung tính 5500K', labelEn: 'Neutral', emoji: '⚪', promptToken: 'neutral daylight 5500K,' },
  { id: 'cool' as const, label: 'Lạnh 7000K', labelEn: 'Cool', emoji: '🔵', promptToken: 'cool blue color temperature,' },
  { id: 'golden-hour' as const, label: 'Giờ vàng', labelEn: 'Golden Hour', emoji: '🌇', promptToken: 'golden hour warm sunlight,' },
  { id: 'blue-hour' as const, label: 'Giờ xanh', labelEn: 'Blue Hour', emoji: '🌆', promptToken: 'blue hour twilight tones,' },
  { id: 'mixed' as const, label: 'Nhiệt độ màu hỗn hợp', labelEn: 'Mixed', emoji: '🎭', promptToken: 'mixed warm and cool lighting,' },
] as const;

// 景深预设 (Focus Puller)
export const DEPTH_OF_FIELD_PRESETS = [
  { id: 'ultra-shallow' as const, label: 'Cực nông f/1.4', labelEn: 'Ultra Shallow', emoji: '🔍', promptToken: 'extremely shallow depth of field, f/1.4, dreamy bokeh,' },
  { id: 'shallow' as const, label: 'Nông f/2.8', labelEn: 'Shallow', emoji: '👤', promptToken: 'shallow depth of field, soft background bokeh,' },
  { id: 'medium' as const, label: 'Trung bình f/5.6', labelEn: 'Medium', emoji: '👥', promptToken: 'medium depth of field,' },
  { id: 'deep' as const, label: 'Sâu f/11', labelEn: 'Deep', emoji: '🏔️', promptToken: 'deep focus, everything sharp,' },
  { id: 'split-diopter' as const, label: 'Kính phân tách', labelEn: 'Split Diopter', emoji: '🪞', promptToken: 'split diopter lens, foreground and background both in focus,' },
] as const;

// 转焦预设
export const FOCUS_TRANSITION_PRESETS = [
  { id: 'none' as const, label: 'Tiêu cự cố định', labelEn: 'None', promptToken: '' },
  { id: 'rack-to-fg' as const, label: 'Chuyển tiêu cự ra tiền cảnh', labelEn: 'Rack to FG', promptToken: 'rack focus to foreground,' },
  { id: 'rack-to-bg' as const, label: 'Chuyển tiêu cự ra hậu cảnh', labelEn: 'Rack to BG', promptToken: 'rack focus to background,' },
  { id: 'rack-between' as const, label: 'Chuyển tiêu cự giữa nhân vật', labelEn: 'Rack Between', promptToken: 'rack focus between characters,' },
  { id: 'pull-focus' as const, label: 'Theo tiêu cự', labelEn: 'Pull Focus', promptToken: 'pull focus following subject movement,' },
] as const;

// 器材预设 (Camera Rig)
export const CAMERA_RIG_PRESETS = [
  { id: 'tripod' as const, label: 'Chân máy', labelEn: 'Tripod', emoji: '📐', promptToken: 'static tripod shot,' },
  { id: 'handheld' as const, label: 'Cầm tay', labelEn: 'Handheld', emoji: '🤲', promptToken: 'handheld camera, slight shake, documentary feel,' },
  { id: 'steadicam' as const, label: 'Steadicam', labelEn: 'Steadicam', emoji: '🎥', promptToken: 'smooth steadicam shot,' },
  { id: 'dolly' as const, label: 'Đường ray', labelEn: 'Dolly', emoji: '🛤️', promptToken: 'dolly tracking shot, smooth rail movement,' },
  { id: 'crane' as const, label: 'Cần cẩu', labelEn: 'Crane', emoji: '🏗️', promptToken: 'crane shot, sweeping vertical movement,' },
  { id: 'drone' as const, label: 'Flycam', labelEn: 'Drone', emoji: '🚁', promptToken: 'aerial drone shot, bird\'s eye perspective,' },
  { id: 'shoulder' as const, label: 'Vác vai', labelEn: 'Shoulder', emoji: '💪', promptToken: 'shoulder-mounted camera, subtle movement,' },
  { id: 'slider' as const, label: 'Thanh trượt', labelEn: 'Slider', emoji: '↔️', promptToken: 'slider shot, short smooth lateral movement,' },
] as const;

// 运动速度预设
export const MOVEMENT_SPEED_PRESETS = [
  { id: 'very-slow' as const, label: 'Rất chậm', labelEn: 'Very Slow', promptToken: 'very slow camera movement,' },
  { id: 'slow' as const, label: 'Chậm', labelEn: 'Slow', promptToken: 'slow camera movement,' },
  { id: 'normal' as const, label: 'Bình thường', labelEn: 'Normal', promptToken: '' },
  { id: 'fast' as const, label: 'Nhanh', labelEn: 'Fast', promptToken: 'fast camera movement,' },
  { id: 'very-fast' as const, label: 'Rất nhanh', labelEn: 'Very Fast', promptToken: 'very fast camera movement,' },
] as const;

// 氛围特效预设 (On-set SFX)
export const ATMOSPHERIC_EFFECT_PRESETS = {
  weather: [
    { id: 'rain' as const, label: 'Mưa', emoji: '🌧️', promptToken: 'rain' },
    { id: 'heavy-rain' as const, label: 'Mưa lớn', emoji: '⛈️', promptToken: 'heavy rain pouring' },
    { id: 'snow' as const, label: 'Tuyết', emoji: '❄️', promptToken: 'snow falling' },
    { id: 'blizzard' as const, label: 'Bão tuyết', emoji: '🌨️', promptToken: 'blizzard, heavy snowstorm' },
    { id: 'fog' as const, label: 'Sương mù dày', emoji: '🌫️', promptToken: 'dense fog' },
    { id: 'mist' as const, label: 'Sương nhẹ', emoji: '🌁', promptToken: 'light mist' },
  ],
  environment: [
    { id: 'dust' as const, label: 'Bụi', emoji: '💨', promptToken: 'dust particles in air' },
    { id: 'sandstorm' as const, label: 'Bão cát', emoji: '🏜️', promptToken: 'sandstorm' },
    { id: 'smoke' as const, label: 'Khói', emoji: '💨', promptToken: 'smoke' },
    { id: 'haze' as const, label: 'Mù nhẹ', emoji: '🌫️', promptToken: 'atmospheric haze' },
    { id: 'fire' as const, label: 'Lửa', emoji: '🔥', promptToken: 'fire, flames' },
    { id: 'sparks' as const, label: 'Tia lửa', emoji: '✨', promptToken: 'sparks flying' },
  ],
  artistic: [
    { id: 'lens-flare' as const, label: 'Lóe ống kính', emoji: '🌟', promptToken: 'lens flare' },
    { id: 'light-rays' as const, label: 'Hiệu ứng Tyndall', emoji: '🌅', promptToken: 'god rays, light rays through atmosphere' },
    { id: 'falling-leaves' as const, label: 'Lá rơi', emoji: '🍂', promptToken: 'falling leaves' },
    { id: 'cherry-blossom' as const, label: 'Hoa anh đào', emoji: '🌸', promptToken: 'cherry blossom petals floating' },
    { id: 'fireflies' as const, label: 'Đom đóm', emoji: '✨', promptToken: 'fireflies glowing' },
    { id: 'particles' as const, label: 'Hạt bụi', emoji: '💫', promptToken: 'floating particles' },
  ],
} as const;

// 特效强度预设
export const EFFECT_INTENSITY_PRESETS = [
  { id: 'subtle' as const, label: 'Nhẹ', labelEn: 'Subtle', promptToken: 'subtle' },
  { id: 'moderate' as const, label: 'Trung bình', labelEn: 'Moderate', promptToken: '' },
  { id: 'heavy' as const, label: 'Mạnh', labelEn: 'Heavy', promptToken: 'heavy' },
] as const;

// 播放速度预设 (Speed Ramping)
export const PLAYBACK_SPEED_PRESETS = [
  { id: 'slow-motion-4x' as const, label: 'Siêu chậm 0.25x', labelEn: 'Super Slow', emoji: '🐌', promptToken: 'ultra slow motion, 120fps,' },
  { id: 'slow-motion-2x' as const, label: 'Chậm 0.5x', labelEn: 'Slow Mo', emoji: '🐢', promptToken: 'slow motion, 60fps,' },
  { id: 'normal' as const, label: 'Bình thường 1x', labelEn: 'Normal', emoji: '▶️', promptToken: '' },
  { id: 'fast-2x' as const, label: 'Tua nhanh 2x', labelEn: 'Fast', emoji: '⏩', promptToken: 'fast motion, sped up,' },
  { id: 'timelapse' as const, label: 'Quay nhanh', labelEn: 'Timelapse', emoji: '⏱️', promptToken: 'timelapse, time passing rapidly,' },
] as const;

// ==================== 镜头运动预设 (Camera Movement) ====================

export const CAMERA_MOVEMENT_PRESETS = [
  { id: 'none' as const, label: 'Không', labelEn: 'None', promptToken: '' },
  { id: 'static' as const, label: 'Cố định', labelEn: 'Static', promptToken: 'static camera, locked off,' },
  { id: 'tracking' as const, label: 'Bám theo', labelEn: 'Tracking', promptToken: 'tracking shot, following subject,' },
  { id: 'orbit' as const, label: 'Xoay quanh', labelEn: 'Orbit', promptToken: 'orbiting around subject, circular camera movement,' },
  { id: 'zoom-in' as const, label: 'Zoom vào', labelEn: 'Zoom In', promptToken: 'zoom in, lens zooming closer,' },
  { id: 'zoom-out' as const, label: 'Zoom ra', labelEn: 'Zoom Out', promptToken: 'zoom out, lens zooming wider,' },
  { id: 'pan-left' as const, label: 'Lia trái', labelEn: 'Pan Left', promptToken: 'pan left, horizontal camera rotation left,' },
  { id: 'pan-right' as const, label: 'Lia phải', labelEn: 'Pan Right', promptToken: 'pan right, horizontal camera rotation right,' },
  { id: 'tilt-up' as const, label: 'Ngẩng lên', labelEn: 'Tilt Up', promptToken: 'tilt up, camera tilting upward,' },
  { id: 'tilt-down' as const, label: 'Cúi xuống', labelEn: 'Tilt Down', promptToken: 'tilt down, camera tilting downward,' },
  { id: 'dolly-in' as const, label: 'Tiến vào', labelEn: 'Dolly In', promptToken: 'dolly in, camera pushing forward,' },
  { id: 'dolly-out' as const, label: 'Lùi ra', labelEn: 'Dolly Out', promptToken: 'dolly out, camera pulling back,' },
  { id: 'truck-left' as const, label: 'Dịch trái', labelEn: 'Truck Left', promptToken: 'truck left, lateral camera movement left,' },
  { id: 'truck-right' as const, label: 'Dịch phải', labelEn: 'Truck Right', promptToken: 'truck right, lateral camera movement right,' },
  { id: 'crane-up' as const, label: 'Cần cẩu lên', labelEn: 'Crane Up', promptToken: 'crane up, camera ascending vertically,' },
  { id: 'crane-down' as const, label: 'Cần cẩu xuống', labelEn: 'Crane Down', promptToken: 'crane down, camera descending vertically,' },
  { id: 'drone-aerial' as const, label: 'Flycam', labelEn: 'Drone Aerial', promptToken: 'drone aerial shot, sweeping aerial movement,' },
  { id: '360-roll' as const, label: 'Cuộn 360°', labelEn: '360° Roll', promptToken: '360 degree barrel roll, rotating camera,' },
] as const;

export type CameraMovementType = typeof CAMERA_MOVEMENT_PRESETS[number]['id'];

// ==================== 特殊拍摄手法预设 (Special Technique) ====================

export const SPECIAL_TECHNIQUE_PRESETS = [
  { id: 'none' as const, label: 'Không', labelEn: 'None', promptToken: '' },
  { id: 'hitchcock-zoom' as const, label: 'Zoom Hitchcock', labelEn: 'Hitchcock Zoom', promptToken: 'dolly zoom, vertigo effect, Hitchcock zoom,' },
  { id: 'timelapse' as const, label: 'Quay nhanh', labelEn: 'Timelapse', promptToken: 'timelapse, time passing rapidly,' },
  { id: 'crash-zoom-in' as const, label: 'Zoom vào đột ngột', labelEn: 'Crash Zoom In', promptToken: 'crash zoom in, sudden rapid zoom,' },
  { id: 'crash-zoom-out' as const, label: 'Zoom ra đột ngột', labelEn: 'Crash Zoom Out', promptToken: 'crash zoom out, sudden rapid pull back,' },
  { id: 'whip-pan' as const, label: 'Lia nhanh', labelEn: 'Whip Pan', promptToken: 'whip pan, fast swish pan, motion blur transition,' },
  { id: 'bullet-time' as const, label: 'Bullet Time', labelEn: 'Bullet Time', promptToken: 'bullet time, frozen time orbit shot, ultra slow motion,' },
  { id: 'fpv-shuttle' as const, label: 'FPV xuyên không gian', labelEn: 'FPV Shuttle', promptToken: 'FPV drone shuttle, first person flight through scene,' },
  { id: 'macro-closeup' as const, label: 'Macro cận cảnh', labelEn: 'Macro Close-up', promptToken: 'macro extreme close-up, intricate detail shot,' },
  { id: 'first-person' as const, label: 'Ngôi thứ nhất', labelEn: 'First Person', promptToken: 'first person POV shot, subjective camera,' },
  { id: 'slow-motion' as const, label: 'Chuyển động chậm', labelEn: 'Slow Motion', promptToken: 'slow motion, dramatic slow mo, high frame rate,' },
  { id: 'probe-lens' as const, label: 'Ống kính thăm dò', labelEn: 'Probe Lens', promptToken: 'probe lens shot, snorkel camera, macro perspective movement,' },
  { id: 'spinning-tilt' as const, label: 'Xoay nghiêng', labelEn: 'Spinning Tilt', promptToken: 'spinning tilting camera, disorienting rotation,' },
] as const;

export type SpecialTechniqueType = typeof SPECIAL_TECHNIQUE_PRESETS[number]['id'];

// ==================== 情绪标签预设 ====================

export const EMOTION_PRESETS = {
  // Cảm xúc cơ bản
  basic: [
    { id: 'happy', label: 'Vui vẻ', emoji: '😊' },
    { id: 'sad', label: 'Buồn', emoji: '😢' },
    { id: 'angry', label: 'Tức giận', emoji: '😠' },
    { id: 'surprised', label: 'Ngạc nhiên', emoji: '😲' },
    { id: 'fearful', label: 'Sợ hãi', emoji: '😨' },
    { id: 'calm', label: 'Bình tĩnh', emoji: '😐' },
  ],
  // Cảm xúc bầu không khí
  atmosphere: [
    { id: 'tense', label: 'Căng thẳng', emoji: '😰' },
    { id: 'excited', label: 'Phấn khích', emoji: '🤩' },
    { id: 'mysterious', label: 'Bí ẩn', emoji: '🤔' },
    { id: 'romantic', label: 'Lãng mạn', emoji: '🥰' },
    { id: 'funny', label: 'Hài hước', emoji: '😂' },
    { id: 'touching', label: 'Cảm động', emoji: '🥹' },
  ],
  // Giọng điệu
  tone: [
    { id: 'serious', label: 'Nghiêm túc', emoji: '😑' },
    { id: 'relaxed', label: 'Thoải mái', emoji: '😌' },
    { id: 'playful', label: 'Đùa cợt', emoji: '😜' },
    { id: 'gentle', label: 'Dịu dàng', emoji: '😇' },
    { id: 'passionate', label: 'Sôi nổi', emoji: '🔥' },
    { id: 'low', label: 'Trầm lắng', emoji: '😔' },
  ],
} as const;

export type EmotionTag = typeof EMOTION_PRESETS.basic[number]['id'] 
  | typeof EMOTION_PRESETS.atmosphere[number]['id'] 
  | typeof EMOTION_PRESETS.tone[number]['id'];

// ==================== 拍摄角度预设 (Camera Angle) ====================

export const CAMERA_ANGLE_PRESETS = [
  { id: 'eye-level' as const, label: 'Ngang tầm mắt', labelEn: 'Eye Level', emoji: '👁️', promptToken: 'eye level angle,' },
  { id: 'high-angle' as const, label: 'Quay từ trên', labelEn: 'High Angle', emoji: '⬇️', promptToken: 'high angle shot, looking down,' },
  { id: 'low-angle' as const, label: 'Quay từ dưới', labelEn: 'Low Angle', emoji: '⬆️', promptToken: 'low angle shot, looking up, heroic perspective,' },
  { id: 'birds-eye' as const, label: 'Nhìn từ trên cao', labelEn: "Bird's Eye", emoji: '🦅', promptToken: "bird's eye view, top-down overhead shot," },
  { id: 'worms-eye' as const, label: 'Nhìn từ mặt đất', labelEn: "Worm's Eye", emoji: '🐛', promptToken: "worm's eye view, extreme low angle from ground," },
  { id: 'over-shoulder' as const, label: 'Qua vai', labelEn: 'Over the Shoulder', emoji: '🫂', promptToken: 'over the shoulder shot, OTS,' },
  { id: 'side-angle' as const, label: 'Quay từ bên', labelEn: 'Side Angle', emoji: '↔️', promptToken: 'side angle, profile view,' },
  { id: 'dutch-angle' as const, label: 'Góc nghiêng', labelEn: 'Dutch Angle', emoji: '📐', promptToken: 'dutch angle, tilted frame, canted angle,' },
  { id: 'third-person' as const, label: 'Ngôi thứ ba', labelEn: 'Third Person', emoji: '🎮', promptToken: 'third person perspective, slightly behind and above subject,' },
] as const;

export type CameraAngleType = typeof CAMERA_ANGLE_PRESETS[number]['id'];

// ==================== 镜头焦距预设 (Focal Length) ====================

export const FOCAL_LENGTH_PRESETS = [
  { id: '8mm' as const, label: '8mm Mắt cá', labelEn: '8mm Fisheye', emoji: '🐟', promptToken: '8mm fisheye lens, extreme barrel distortion, ultra wide field of view,' },
  { id: '14mm' as const, label: '14mm Siêu rộng', labelEn: '14mm Ultra Wide', emoji: '🌐', promptToken: '14mm ultra wide angle lens, dramatic perspective distortion,' },
  { id: '24mm' as const, label: '24mm Góc rộng', labelEn: '24mm Wide', emoji: '🏔️', promptToken: '24mm wide angle lens, environmental context, slight perspective exaggeration,' },
  { id: '35mm' as const, label: '35mm Góc rộng tiêu chuẩn', labelEn: '35mm Standard Wide', emoji: '📷', promptToken: '35mm lens, natural wide perspective, street photography feel,' },
  { id: '50mm' as const, label: '50mm Tiêu chuẩn', labelEn: '50mm Standard', emoji: '👁️', promptToken: '50mm standard lens, natural human eye perspective,' },
  { id: '85mm' as const, label: '85mm Chân dung', labelEn: '85mm Portrait', emoji: '🧑', promptToken: '85mm portrait lens, flattering facial proportions, smooth background compression,' },
  { id: '105mm' as const, label: '105mm Tele trung bình', labelEn: '105mm Medium Tele', emoji: '🔭', promptToken: '105mm medium telephoto, gentle background compression,' },
  { id: '135mm' as const, label: '135mm Tele dài', labelEn: '135mm Telephoto', emoji: '📡', promptToken: '135mm telephoto lens, strong background compression, subject isolation,' },
  { id: '200mm' as const, label: '200mm Tele xa', labelEn: '200mm Long Tele', emoji: '🔬', promptToken: '200mm telephoto, extreme background compression, flattened perspective,' },
  { id: '400mm' as const, label: '400mm Siêu tele', labelEn: '400mm Super Tele', emoji: '🛰️', promptToken: '400mm super telephoto, extreme compression, distant subject isolation,' },
] as const;

export type FocalLengthType = typeof FOCAL_LENGTH_PRESETS[number]['id'];

// ==================== 摄影技法预设 (Photography Technique) ====================

export const PHOTOGRAPHY_TECHNIQUE_PRESETS = [
  { id: 'long-exposure' as const, label: 'Phơi sáng dài', labelEn: 'Long Exposure', emoji: '🌊', promptToken: 'long exposure, motion blur, light trails, smooth water,' },
  { id: 'double-exposure' as const, label: 'Phơi sáng kép', labelEn: 'Double Exposure', emoji: '👥', promptToken: 'double exposure, overlapping images, ghostly transparency effect,' },
  { id: 'macro' as const, label: 'Chụp Macro', labelEn: 'Macro', emoji: '🔍', promptToken: 'macro photography, extreme close-up, intricate details visible,' },
  { id: 'tilt-shift' as const, label: 'Tilt-Shift', labelEn: 'Tilt-Shift', emoji: '🏘️', promptToken: 'tilt-shift photography, miniature effect, selective focus plane,' },
  { id: 'high-speed' as const, label: 'Đóng băng tốc độ cao', labelEn: 'High Speed Freeze', emoji: '⚡', promptToken: 'high speed photography, frozen motion, sharp action freeze frame,' },
  { id: 'bokeh' as const, label: 'Bokeh xóa phông', labelEn: 'Bokeh', emoji: '💫', promptToken: 'beautiful bokeh, creamy out-of-focus highlights, dreamy background blur,' },
  { id: 'reflection' as const, label: 'Chụp phản chiếu', labelEn: 'Reflection', emoji: '🪞', promptToken: 'reflection photography, mirror surface, symmetrical composition,' },
  { id: 'silhouette-technique' as const, label: 'Chụp bóng đen', labelEn: 'Silhouette', emoji: '🌅', promptToken: 'silhouette photography, dark figure against bright background, rim light outline,' },
] as const;

export type PhotographyTechniqueType = typeof PHOTOGRAPHY_TECHNIQUE_PRESETS[number]['id'];
