using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

public partial class MeterReading
{
    [Key]
    public int ReadingId { get; set; }

    public int RoomId { get; set; }

    [StringLength(7)]
    [Unicode(false)]
    public string? Month { get; set; }

    public int? ElectricOld { get; set; }

    public int? ElectricNew { get; set; }

    public int? WaterOld { get; set; }

    public int? WaterNew { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("RoomId")]
    [InverseProperty("MeterReadings")]
    public virtual Room Room { get; set; } = null!;
}
